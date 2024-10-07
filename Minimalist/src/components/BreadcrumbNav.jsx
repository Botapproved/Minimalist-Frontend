import React from 'react';

function BreadcrumbNav({title,category}) {
    console.log(category, title)
  const breadcrumbs = [
    { label: 'Homepage', link: '/' },
    { label: 'Categories', link: '/' },
    { label: category, link: `/${category.replace(/\s+/g, '').toLowerCase()}` },
    { label: title, link: '#', current: true }
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2.5 items-start self-start text-sm text-gray-500 max-md:max-w-full">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.label}>
          {index > 0 && (
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae4c7afc0d8ded214cd681096cd05fe8ee686246d18f49aa095d243e1305667?placeholderIfAbsent=true&apiKey=547e5c513c494115a73770f7bdaf9210" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
          )}
          <div className={`flex gap-2 items-center ${crumb.current ? 'text-zinc-800' : 'whitespace-nowrap'}`}>
            {crumb.current ? (
              <span>{crumb.label}</span>
            ) : (
              <a href={crumb.link}>{crumb.label}</a>
            )}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
}

export default BreadcrumbNav;