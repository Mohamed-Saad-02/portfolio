export async function getProjects(topics = ["portfolio"]) {
  let allProjects = [];

  for (const topic of topics) {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=topic:${topic}+user:${process.env.GITHUB_USERNAME}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.error(`❌ خطأ في جلب البيانات: ${res.status} ${res.statusText}`);
      continue; // إذا فشل الطلب، نكمل الحلقة دون كسر التطبيق
    }

    const data = await res.json();

    if (!data || !data.items) {
      console.warn(`⚠️ تحذير: لم يتم العثور على عناصر للموضوع: ${topic}`);
      continue;
    }

    allProjects.push(...data.items);
  }

  const uniqueProjects = Array.from(
    new Map(allProjects.map((p) => [p.id, p])).values()
  );

  return uniqueProjects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description || "No description available",
    html_url: project.html_url,
    homepage: project.homepage,
    topics: project.topics || [],
    imageUrl: `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${project.name}/main/preview.png`,
  }));
}
