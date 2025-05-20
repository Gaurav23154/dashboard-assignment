import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaWordpress } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const articles = [
  { 
    title: "How to Improve Your Skill in League of Legends", 
    keyword: "league of legends [2240000]", 
    words: 4375, 
    created: "30 hours ago",
    status: "Published",
    views: "2.4K"
  },
  { 
    title: "How to Master Last Hitting in League of Legends", 
    keyword: "league of legends [2240000]", 
    words: 3480, 
    created: "21 hours ago",
    status: "Published",
    views: "1.8K"
  },
  { 
    title: "7 Tips for Better Teamplay in League of Legends", 
    keyword: "league of legends [2240000]", 
    words: 2676, 
    created: "a day ago",
    status: "Published",
    views: "3.2K"
  },
  { 
    title: "Top Virtual Executive Assistant Services (2024)", 
    keyword: "virtual executive assistant [2900]", 
    words: 2408, 
    created: "1 Oct, 24",
    status: "Scheduled",
    views: "0"
  },
  { 
    title: "Unlimited Graphics Design Solutions", 
    keyword: "unlimited graphic design services [390]", 
    words: 1793, 
    created: "---",
    status: "Draft",
    views: "0"
  },
  { 
    title: "Top Amazon Payment Methods for Quick Access to Funds", 
    keyword: "amazon payment methods [3600]", 
    words: 2647, 
    created: "---",
    status: "Draft",
    views: "0"
  },
  { 
    title: "Backlinks 101: What are backlinks and why they're important", 
    keyword: "backlinks [8100]", 
    words: 2261, 
    created: "---",
    status: "Draft",
    views: "0"
  },
  { 
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)", 
    keyword: "ai seo software [880]", 
    words: 1543, 
    created: "---",
    status: "Draft",
    views: "0"
  },
  { 
    title: "Unlimited Graphic Design Services You Can Rely On", 
    keyword: "unlimited graphic design services [390]", 
    words: 1974, 
    created: "---",
    status: "Draft",
    views: "0"
  },
  { 
    title: "The Ultimate Guide to Content Marketing in 2024", 
    keyword: "content marketing [5400]", 
    words: 3125, 
    created: "2 days ago",
    status: "Published",
    views: "4.1K"
  },
  { 
    title: "How to Start a Successful Blog in 2024", 
    keyword: "how to start a blog [12100]", 
    words: 2890, 
    created: "3 days ago",
    status: "Published",
    views: "5.6K"
  },
  { 
    title: "10 Best SEO Tools for Small Businesses", 
    keyword: "seo tools [5400]", 
    words: 2345, 
    created: "4 days ago",
    status: "Published",
    views: "3.8K"
  }
];

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-extrabold text-center mb-4">Articles</h1>
        <Tabs defaultValue="generated" className="w-full flex flex-col items-center">
          <TabsList className="flex gap-2 bg-transparent p-0 border-0">
            <TabsTrigger value="generated" className="rounded-full px-6 py-2 font-semibold text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black border border-gray-300">Generated Articles</TabsTrigger>
            <TabsTrigger value="published" className="rounded-full px-6 py-2 font-semibold text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black border border-gray-300">Published Articles</TabsTrigger>
            <TabsTrigger value="scheduled" className="rounded-full px-6 py-2 font-semibold text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black border border-gray-300">Scheduled Articles</TabsTrigger>
            <TabsTrigger value="archived" className="rounded-full px-6 py-2 font-semibold text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black border border-gray-300">Archived Articles</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <Input placeholder="Search for Title & Keywords..." className="w-96 text-center" />
        <div className="flex items-center gap-4">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Published</option>
            <option>Scheduled</option>
            <option>Draft</option>
          </select>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
            <option>Sort by: Most Views</option>
            <option>Sort by: Most Words</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword [Traffic]</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Words</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created On</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publish</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{article.keyword}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{article.words}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${article.status === 'Published' ? 'bg-green-100 text-green-800' : 
                        article.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{article.views}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{article.created}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      View
                    </Button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <FaWordpress className="text-blue-500" />
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>Showing 1 to 12 of 12 entries</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">1</Button>
          <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </div>
  );
} 