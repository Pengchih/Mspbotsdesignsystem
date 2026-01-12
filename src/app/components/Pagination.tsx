import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Size of the pagination buttons */
  size?: 'sm' | 'md';
  /** Whether to show background for buttons */
  background?: boolean;
  /** Whether to show simple mode (only prev/next buttons) */
  simple?: boolean;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ currentPage, totalPages, onPageChange, size = 'md', background = true, simple = false, className, ...props }, ref) => {
    const isSmall = size === 'sm';
    
    // Generate page numbers to display
    const getPageNumbers = () => {
      const delta = 2; // Number of pages to show on each side of current page
      const range = [];
      const rangeWithDots = [];
      let l;

      range.push(1);

      if (totalPages <= 1) return range;

      for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < totalPages && i > 1) {
          range.push(i);
        }
      }
      
      range.push(totalPages);

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push('...');
          }
        }
        rangeWithDots.push(i);
        l = i;
      }

      return rangeWithDots;
    };

    const pages = getPageNumbers();

    const handlePrev = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const baseButtonClass = `mspbots-pagination-button mspbots-pagination-button-${size}`;
    const backgroundClass = background ? 'mspbots-pagination-background' : 'mspbots-pagination-no-background';
    
    if (simple) {
      return (
        <div 
          ref={ref} 
          className={`mspbots-pagination-simple mspbots-pagination-simple-${size} ${className || ''}`} 
          {...props}
        >
          <button
            className={`${baseButtonClass} mspbots-pagination-simple-prev`}
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </button>
          <button
            className={`${baseButtonClass} mspbots-pagination-simple-next`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </button>
        </div>
      );
    }

    return (
      <div 
        ref={ref} 
        className={`mspbots-pagination ${className || ''}`} 
        {...props}
      >
        <button
          className={`${baseButtonClass} ${backgroundClass} mspbots-pagination-prev`}
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
        </button>

        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`dots-${index}`} className={`mspbots-pagination-dots mspbots-pagination-dots-${size}`}>
                <DotsHorizontalIcon />
              </span>
            );
          }

          const pageNum = page as number;
          const isSelected = pageNum === currentPage;
          const selectedClass = isSelected ? 'mspbots-pagination-selected' : '';

          return (
            <button
              key={pageNum}
              className={`${baseButtonClass} ${backgroundClass} ${selectedClass}`}
              onClick={() => onPageChange(pageNum)}
              aria-label={`Page ${pageNum}`}
              aria-current={isSelected ? 'page' : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className={`${baseButtonClass} ${backgroundClass} mspbots-pagination-next`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRightIcon />
        </button>
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';
