import ItemNav from '@layouts/components/LeftBar/ItemNav';
import { styled } from '@mui/material/styles';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import React from 'react';

import styles from './style.module.scss';

const StyledTreeItem = styled(TreeItem)(() => ({}));

const navbar = [
  {
    label: 'home',
    href: '/',
    children: [
      {
        label: 'new',
        href: '/new',
      },
    ],
  },
  {
    label: 'branch',
    href: '/',
    children: [
      {
        label: 'new',
        href: '/new',
      },
    ],
  },
];

const LeftBarNavigation = () => {
  return (
    <div className={styles.leftBarContainer}>
      <div className={styles.innerContainer}>
        <TreeView></TreeView>
      </div>
    </div>
  );
};

export default LeftBarNavigation;
