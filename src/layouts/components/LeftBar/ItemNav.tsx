import React from 'react';

interface ItemNavProps {
  label: string;
  href?: string;
}

const ItemNav = (props: ItemNavProps) => {
  const { href, label } = props;
  return <div>{label}</div>;
};

export default ItemNav;
