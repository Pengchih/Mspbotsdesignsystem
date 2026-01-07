import { toast } from "sonner";

const fallbackCopyText = (text: string, description: string) => {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Ensure the textarea is not visible but part of the DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    // Avoid scrolling to bottom
    textArea.setAttribute("readonly", "");
    
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    if (successful) {
      toast.success(description);
      return true;
    } else {
      console.error("Fallback copy failed: execCommand returned false");
      return false;
    }
  } catch (err) {
    console.error("Fallback copy failed", err);
    return false;
  }
};

export const copyToClipboard = async (text: string, description: string = "Copied to clipboard") => {
  // Try using the Async Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(description);
      return;
    } catch (err) {
      console.warn("Clipboard API failed, attempting fallback...", err);
      // If Clipboard API fails (e.g. permission denied), fall through to fallback
    }
  }

  // Fallback for environments where Clipboard API is restricted or unavailable
  // or if the primary method failed
  const success = fallbackCopyText(text, description);
  
  if (!success) {
    toast.error("Failed to copy to clipboard");
  }
};
