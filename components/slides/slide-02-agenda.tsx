export function Slide02Agenda() {
  return (
    <div className="flex flex-col h-full -mx-16 -my-16">
      {/* Agenda pill */}
      <div className="mt-16 mb-20 ml-16">
        <div className="inline-block bg-white rounded-full px-6 py-2">
          <span className="text-black text-xl font-normal">Agenda</span>
        </div>
      </div>

      {/* Spacer to push grid to bottom */}
      <div className="flex-[3]"></div>

      {/* Agenda table */}
      <div className="grid grid-cols-[80px_80px_1fr_80px_80px_80px_1fr] grid-rows-[auto_auto_auto_auto_1fr] border-t border-white/20 flex-1">
        {/* Row 1 */}
        <div className="border-r border-white/20"></div>
        <div className="border-r border-white/20 py-6 flex items-center justify-center">
          <span className="text-white/40 text-2xl font-semibold">1</span>
        </div>
        <div className="py-6 px-8 flex items-center">
          <span className="text-white text-xl font-semibold">
            What is an Agent
          </span>
        </div>
        <div className="border-l border-white/20"></div>
        <div className="border-l border-white/20"></div>
        <div className="border-l border-white/20"></div>
        <div></div>

        {/* Row 2 */}
        <div className="border-r border-t border-white/20"></div>
        <div className="border-r border-t border-white/20 py-6 flex items-center justify-center">
          <span className="text-white/40 text-2xl font-semibold">2</span>
        </div>
        <div className="border-t border-white/20 py-6 px-8 flex items-center">
          <span className="text-white text-xl font-semibold">
            Why build an Agent
          </span>
        </div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-t border-white/20"></div>

        {/* Row 3 */}
        <div className="border-r border-t border-white/20"></div>
        <div className="border-r border-t border-white/20 py-6 flex items-center justify-center">
          <span className="text-white/40 text-2xl font-semibold">3</span>
        </div>
        <div className="border-t border-white/20 py-6 px-8 flex items-center">
          <span className="text-white text-xl font-semibold">
            How to build an Agent
          </span>
        </div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-t border-white/20"></div>

        {/* Row 4 */}
        <div className="border-r border-t border-white/20"></div>
        <div className="border-r border-t border-white/20 py-6 flex items-center justify-center">
          <span className="text-white/40 text-2xl font-semibold">4</span>
        </div>
        <div className="border-t border-white/20 py-6 px-8 flex items-center">
          <span className="text-white text-xl font-semibold">
            How to deploy an Agent
          </span>
        </div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-t border-white/20"></div>

        {/* Row 5 - empty to extend vertical lines to bottom */}
        <div className="border-r border-t border-white/20"></div>
        <div className="border-r border-t border-white/20"></div>
        <div className="border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-l border-t border-white/20"></div>
        <div className="border-t border-white/20"></div>
      </div>
    </div>
  );
}
