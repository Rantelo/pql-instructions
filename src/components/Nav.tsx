import React from 'react';

// Simple SPA navigation
const Nav = ({page, setPage}) => {
  const isSelectedClasses = "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
  const notSelectedClasses = "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href='#'
            onClick={() => setPage("Create Team")}
            className={page === "Create Team" ? isSelectedClasses : notSelectedClasses }>
            Create Team
          </a>
        </li>
        <li className="me-2">
          <a
            href='#'
            onClick={() => setPage("Teams")}
            className={page === "Teams" ? isSelectedClasses : notSelectedClasses }>
            Teams
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav;