interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadCrumbs = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {items.map((item: BreadcrumbItem, index: number) => (
          <li key={index}>
            {index !== items.length - 1 ? (
              <a href={item.url} className="text-blue-500 hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default BreadCrumbs;
