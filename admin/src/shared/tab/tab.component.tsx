import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { default as MaterialTab } from '@material-ui/core/Tab';
import { TabOption } from './tab.types';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props {
  tabs: TabOption[],
}

const Tab =  ({ tabs }: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const ActiveComponent = tabs[value].component

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='primary'
          centered
        >
          {tabs.map((tab, index) => <MaterialTab key={index} label={tab.displayName} />)}
        </Tabs>
      </Paper>
      <ActiveComponent />
    </React.Fragment>
  );
}

export default Tab
