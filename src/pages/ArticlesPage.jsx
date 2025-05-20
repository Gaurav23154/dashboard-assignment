import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const articles = [
  { title: "How to Improve Your Skill in League of Legends", keyword: "league of legends [2240000]", words: 4375, created: "30 hours ago" },
  { title: "How to Master Last Hitting in League of Legends", keyword: "league of legends [2240000]", words: 3480, created: "21 hours ago" },
  // ... more rows
];

export default function ArticlesPage() {
  return (
    <div className="p-6">
      <Tabs defaultValue="generated">
        <TabsList>
          <TabsTrigger value="generated">Generated Articles</TabsTrigger>
          <TabsTrigger value="published">Published Articles</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
          <TabsTrigger value="archived">Archived Articles</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-4 flex items-center justify-between">
        <Input placeholder="Search for title & keywords..." className="w-80" />
      </div>
      <div className="mt-6 bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left"><input type="checkbox" /></th>
              <th className="p-3 text-left">Article Title</th>
              <th className="p-3 text-left">Keyword [Traffic]</th>
              <th className="p-3 text-left">Words</th>
              <th className="p-3 text-left">Created On</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Publish</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3">{a.title}</td>
                <td className="p-3">{a.keyword}</td>
                <td className="p-3">{a.words}</td>
                <td className="p-3">{a.created}</td>
                <td className="p-3"><Button size="sm">View</Button></td>
                <td className="p-3"><input type="checkbox" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 