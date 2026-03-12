import { X } from "lucide-react";

export function ResumePreviewModal({ open, file, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] bg-black/75 p-4 backdrop-blur-md" onClick={onClose}>
      <div
        className="mx-auto flex h-full w-full max-w-5xl flex-col rounded-[32px] border border-white/10 bg-[#080a0f] p-4 shadow-glow sm:p-5"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-2xl text-white">Resume Preview</h3>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            onClick={onClose}
            aria-label="Close resume preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden rounded-[24px] border border-white/10">
          <object data={file} type="application/pdf" className="h-full w-full">
            <iframe title="Resume PDF" src={file} className="h-full w-full" />
          </object>
        </div>
      </div>
    </div>
  );
}
