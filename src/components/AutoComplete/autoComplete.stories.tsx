import { action } from "@storybook/addon-actions";

import { Meta } from "@storybook/react";

import AutoComplete from "./autoComplete";

export default {
  title: "AutoComplete Component",
  component: AutoComplete,
} as Meta;

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.log(items);
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};

export const AutoCompletes = () => (
    <div style={{height: 500}}><AutoComplete onSelect={action("selected")} fetchSuggestions={handleFetch} /></div>
);
