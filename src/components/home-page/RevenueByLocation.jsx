import Map from '../../assets/map.svg';

export default function RevenueByLocation() {
  const data = [
    { city: "New York", value: "72K", percent: 90 },
    { city: "San Francisco", value: "39K", percent: 50 },
    { city: "Sydney", value: "25K", percent: 30 },
    { city: "Singapore", value: "61K", percent: 75 },
  ];

  return (
    <div className="bg-gray-50 dark:bg-[rgba(255,255,255,0.05)] rounded-2xl shadow p-6 w-[202px] h-[318px] flex flex-col">
      <h2 className="text-gray-800 font-medium mb-3">Revenue by Location</h2>

      {/* Map container */}
      <div className="relative w-full h-24 mb-4">
        <img src={Map} alt="World Map" className="w-full h-full object-cover rounded-lg" />

        {/* Location markers (adjust positions with top/left) */}
        <span className="absolute top-[30%] left-[28%] w-2 h-2 bg-black rounded-full"></span> {/* New York */}
        <span className="absolute top-[35%] left-[20%] w-2 h-2 bg-black rounded-full"></span> {/* San Francisco */}
        <span className="absolute top-[70%] left-[85%] w-2 h-2 bg-black rounded-full"></span> {/* Sydney */}
        <span className="absolute top-[55%] left-[78%] w-2 h-2 bg-black rounded-full"></span> {/* Singapore */}
      </div>

      {/* Revenue List */}
      <div className="space-y-2 text-sm">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">{item.city}</span>
              <span className="text-gray-800 font-medium">{item.value}</span>
            </div>

            {/* Progress bar container */}
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div
                className="h-1 bg-black rounded-full"
                style={{ width: `${item.percent}%` }} // highlight according to percent
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
