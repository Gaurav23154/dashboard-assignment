import { dummyData } from "../data/dummyData"
import { FaWordpress } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const columns = [
  { key: "title", label: "Article Title" },
  { key: "keyword", label: "Keyword [Traffic]" },
  { key: "words", label: "Words" },
  { key: "created", label: "Created On" },
  { key: "action", label: "Action" },
  { key: "publish", label: "Publish" },
];

const tabs = [
  "Generated Articles",
  "Published Articles",
  "Scheduled Articles",
  "Archived Articles"
];

export default function DataTable() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("title");
  const [sortAsc, setSortAsc] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filtered = dummyData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.keyword.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="flex justify-center w-full min-h-[90vh] items-start bg-[#f7fafd] py-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Articles</h1>
        <div className="flex justify-center mb-6">
          <div className="flex gap-2 bg-[#f7fafd] rounded-lg p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2 rounded-lg font-medium transition-all text-sm
                  ${activeTab === i
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <Input
            placeholder="Search for Title & Keywords..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-[320px] border border-gray-300 rounded-lg px-4 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="py-4 px-2 align-middle">
                  <input type="checkbox" className="accent-blue-600 w-4 h-4 align-middle" />
                </th>
                {columns.map(col => (
                  <th
                    key={col.key}
                    className="py-4 px-2 font-bold text-base align-middle cursor-pointer select-none group"
                    onClick={() => {
                      if (col.key === sortKey) setSortAsc(a => !a);
                      else { setSortKey(col.key); setSortAsc(true); }
                    }}
                  >
                    <span className="flex items-center gap-1">
                      {col.label}
                      {sortKey === col.key && (
                        <span className="text-xs">{sortAsc ? "▲" : "▼"}</span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <tr key={i} className="border-b">
                      {Array.from({ length: 7 }).map((_, j) => (
                        <td className="py-4 px-2" key={j}><Skeleton className="h-6 w-full rounded" /></td>
                      ))}
                    </tr>
                  ))
                : sorted.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-2 align-middle">
                        <input type="checkbox" className="accent-blue-600 w-4 h-4 align-middle" />
                      </td>
                      <td className="py-4 px-2 align-middle text-gray-900 font-medium whitespace-nowrap">{item.title}</td>
                      <td className="py-4 px-2 align-middle whitespace-nowrap">{item.keyword}</td>
                      <td className="py-4 px-2 align-middle">{item.words}</td>
                      <td className="py-4 px-2 align-middle whitespace-nowrap">{item.created}</td>
                      <td className="py-4 px-2 align-middle">
                        <Button size="sm" className="bg-white border border-green-400 text-green-600 rounded-lg px-6 py-1.5 font-semibold shadow-none hover:bg-green-50 transition">{item.action}</Button>
                      </td>
                      <td className="py-4 px-2 align-middle text-center">
                        <div className="flex items-center justify-center gap-1">
                          {item.publish && <FaWordpress className="inline text-blue-500 text-xl" />}
                          <ChevronDown className="inline w-4 h-4 text-gray-400 ml-1" />
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-700 mt-4 flex items-center gap-2">
          Total {sorted.length} Article Titles |
          <span>Show <select className="border rounded px-1 py-0.5 mx-1"><option>10</option></select> entries per page</span>
        </div>
      </div>
    </div>
  )
}
