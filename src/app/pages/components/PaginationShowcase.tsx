import React, { useState } from 'react';
import { ComponentExample } from '../../components/ComponentExample';
import { Pagination } from '../../components/Pagination';

export function PaginationShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSm, setCurrentPageSm] = useState(1);
  const [currentPageNoBg, setCurrentPageNoBg] = useState(1);
  const [currentPageSimpleSm, setCurrentPageSimpleSm] = useState(1);
  const [currentPageSimpleMd, setCurrentPageSimpleMd] = useState(1);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Pagination</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A long list can be divided into several pages using Pagination, and it takes up less space.
        </p>
      </div>

      {/* General Preview */}
      <div className="flex flex-wrap gap-4 p-12 border border-border rounded-[8px] bg-background items-center justify-center min-h-[160px]">
        <Pagination 
          currentPage={currentPage} 
          totalPages={10} 
          onPageChange={setCurrentPage} 
        />
      </div>

      <div className="space-y-12">
        <ComponentExample
          title="Basic Usage"
          description="Default pagination with background."
          code={`<Pagination 
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>`}
        >
          <Pagination 
            currentPage={currentPage} 
            totalPages={10} 
            onPageChange={setCurrentPage} 
          />
        </ComponentExample>

        <ComponentExample
          title="Small Size"
          description="Pagination in small size."
          code={`<Pagination 
  size="sm"
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>`}
        >
          <Pagination 
            size="sm"
            currentPage={currentPageSm} 
            totalPages={10} 
            onPageChange={setCurrentPageSm} 
          />
        </ComponentExample>

        <ComponentExample
          title="No Background"
          description="Pagination without background."
          code={`<Pagination 
  background={false}
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>`}
        >
          <Pagination 
            background={false}
            currentPage={currentPageNoBg} 
            totalPages={10} 
            onPageChange={setCurrentPageNoBg} 
          />
        </ComponentExample>

        <ComponentExample
          title="Simple Mode"
          description="Simple pagination with only previous and next buttons. Available in sm and md sizes."
          code={`<Pagination 
  simple
  size="sm"
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>

<Pagination 
  simple
  size="md"
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>`}
        >
          <div className="flex gap-4 items-center">
            <Pagination 
              simple
              size="sm"
              currentPage={currentPageSimpleSm} 
              totalPages={10} 
              onPageChange={setCurrentPageSimpleSm} 
            />
            <Pagination 
              simple
              size="md"
              currentPage={currentPageSimpleMd} 
              totalPages={10} 
              onPageChange={setCurrentPageSimpleMd} 
            />
          </div>
        </ComponentExample>
      </div>
    </div>
  );
}
