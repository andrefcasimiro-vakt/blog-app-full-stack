import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { LinkProps } from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    arrow: {
    },
    listItem: {
      display: 'flex',
    },
    listWrapper: {
      width: '100%',
    },
    drawerMinimized: {
      borderLeft: `.25rem solid ${theme.palette.primary[500]}`,
    }
  }),
);

interface ListItemLinkProps extends LinkProps {
  children?: React.ReactChild | React.ReactNode,
  open?: boolean;
  renderArrow?: boolean,
  icon?: React.FC,
  onClick?: any,

  /** For when the drawer is minimized */
  drawerMinimized?: boolean,
}

function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
  const { children, open, renderArrow, icon, onClick, drawerMinimized, ...other } = props;

  const classes = useStyles()

  const Icon = icon

  return (
    <li onClick={onClick} className={classes.listWrapper}>
      <ListItem button {...other} className={drawerMinimized ? classes.drawerMinimized : ''}>
        {drawerMinimized
          ? (Icon && <Icon />)
          : (
              <>
                <ListItemText>
                  <div className={classes.listItem}>
                    {Icon && <Icon />}
                    {children}
                  </div>
                </ListItemText>
                {renderArrow && (
                  open != null
                    ? (open ? <ExpandLess className={classes.arrow} /> : <ExpandMore className={classes.arrow} /> )
                    : null
                )}
              </>
          )
        }

      </ListItem>
    </li>
  );
}

export default ListItemLink
