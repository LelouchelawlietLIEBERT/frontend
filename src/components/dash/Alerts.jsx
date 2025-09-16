import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";

const Alerts = () => {
  const alertData = [
    {
      id: 1,
      type: "invalid",
      message: "Degree certificate for 'Computer Science' from 'Tech University' flagged as potentially forged.",
      date: "2024-07-26",
      status: "Unread",
    },
    {
      id: 2,
      type: "system",
      message: "System maintenance scheduled for 2024-07-28, 20:00 - 22:00 UTC.",
      date: "2024-07-25",
      status: "Read",
    },
    {
      id: 3,
      type: "invalid",
      message: "Diploma certificate for 'Business Administration' from 'Global Business School' flagged as potentially forged.",
      date: "2024-07-24",
      status: "Unread",
    },
    {
      id: 4,
      type: "system",
      message: "New feature: Bulk verification now available.",
      date: "2024-07-23",
      status: "Read",
    },
  ];

  const getBadgeColor = (type) => {
    switch (type) {
      case "invalid":
        return "bg-red-900/50 text-red-400";
      case "system":
      default:
        return "bg-blue-900/50 text-blue-400";
    }
  };

  const getStatusColor = (status) => {
    return status === "Read"
      ? "bg-green-900/50 text-green-400"
      : "bg-yellow-900/50 text-yellow-400";
  };

  return (
    <main className="flex-1 p-5 bg-gray-50 dark:bg-gray-200 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="mb-1 text-3xl font-bold tracking-tight text-gray-900">Alerts</h2>
          <p className="text-gray-600 dark:text-gray-700 font-medium text-xl">
            Manage and review alerts related to invalid or forged entries.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 mb-4">
        <div className="flex gap-x-8">
          <button className="border-b-2 border-gray-900 text-gray-900 pb-3 pt-2 text-sm font-semibold">
            All
          </button>
          <button className="border-b-2 border-transparent pb-3 pt-2 text-sm font-medium text-gray-800 hover:border-gray-900 hover:text-gray-900">
            Invalid Entries
          </button>
          <button className="border-b-2 border-transparent pb-3 pt-2 text-sm font-medium text-gray-800 hover:border-gray-900 hover:text-gray-900">
            System Messages
          </button>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="relative w-full max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400 dark:text-gray-700 text-[1.2rem]"/>
          </div>
          <input
            type="text"
            placeholder="Search alerts..."
            className="p-5 w-full text-[1.2rem] rounded-md border border-gray-800 bg-gray-200 dark:bg-gray-200 py-2 pl-10 pr-4 text-gray-900 dark:text-gray-900 placeholder-gray-700 placeholder:font-medium focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-primary-500 placeholder:text-[1.1rem]"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
            <FaSortAmountDown /> Sort
          </button>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="overflow-hidden rounded-lg border border-gray-600">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-900 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                Status
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 bg-gray-950 dark:bg-gray-900">
            {alertData.map((alert) => (
              <tr key={alert.id} className="hover:bg-gray-800/50">
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getBadgeColor(
                      alert.type
                    )}`}
                  >
                    <span
                      className={`mr-1.5 h-2 w-2 rounded-full ${
                        alert.type === "invalid" ? "bg-red-500" : "bg-blue-500"
                      }`}
                    ></span>
                    {alert.type === "invalid" ? "Invalid Entry" : "System Message"}
                  </span>
                </td>
                <td className="max-w-sm px-6 py-4 text-sm text-gray-400">{alert.message}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{alert.date}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getStatusColor(
                      alert.status
                    )}`}
                  >
                    {alert.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-primary-500 hover:text-primary-400"
                  >
                    View Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing <span className="font-medium text-white">1</span> to{" "}
          <span className="font-medium text-white">4</span> of{" "}
          <span className="font-medium text-white">12</span> results
        </p>
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border border-gray-800 bg-gray-900 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-800 disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button className="rounded-md border border-gray-800 bg-gray-900 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-800">
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Alerts;
