import { FaCloudUploadAlt } from "react-icons/fa";
const Verifications = () => {
  return (
    <>
      <main class="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <div class="text-center">
            <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Upload Document
            </h1>
            <p class="mt-3 text-lg text-slate-600">
              Upload your academic degree or certificate to verify its
              authenticity. We support PDFs and scanned images.
            </p>
          </div>
          <div class="mt-12">
            <div class="relative flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-slate-300 bg-white p-8 transition-colors hover:border-blue-500 hover:bg-blue-50/50 sm:p-12">
              <div class="flex flex-col items-center gap-2 text-center">
                <span class="material-symbols-outlined text-6xl text-slate-400">
                  <FaCloudUploadAlt/>
                </span>
                <p class="text-xl font-semibold text-slate-900">
                  Drag and drop your document here
                </p>
                <p class="text-slate-600 text-[1.5rem]">or</p>
              </div>
              <label
                class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-slate-900 text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-slate-800"
                for="file-upload"
              >
                <span class="truncate">Browse Files</span>
              </label>
              <input
                class="sr-only"
                id="file-upload"
                name="file-upload"
                type="file"
              />
            </div>
            <p class="mt-4 text-center text-sm text-slate-500">
              Supported formats: PDF, JPG, PNG. Max file size: 10MB
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Verifications;
