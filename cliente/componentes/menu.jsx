import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export function MenuLista() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const [open9, setOpen9] = React.useState(false);
    const [open10, setOpen10] = React.useState(false);
    const [open11, setOpen11] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    }
    function handleClick1() {
        setOpen1(!open1);
    }
    function handleClick2() {
        setOpen2(!open2);
    }
    function handleClick3() {
        setOpen3(!open3);
    }
    function handleClick4() {
        setOpen4(!open4);
    }
    function handleClick5() {
        setOpen5(!open5);
    }
    function handleClick6() {
        setOpen6(!open6);
    }
    function handleClick7() {
        setOpen7(!open7);
    }
    function handleClick8() {
        setOpen8(!open8);
    }
    function handleClick9() {
        setOpen9(!open9);
    }
    function handleClick10() {
        setOpen10(!open10);
    }
    function handleClick11() {
        setOpen11(!open11);
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <h1>Sistema de Informação</h1>
        </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button onClick={handleClick}>
                {/* <ListItemIcon>
                    <SendIcon />
                </ListItemIcon> */}
                <ListItemText primary="Software" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Office" />
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={handleClick8} className={classes.nested}>
                        <ListItemText primary="Primavera" />
                        {open8 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open8} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText secondary="Versão 10" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
                <ListItemText primary="Hardware" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Descktop" />
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Laptop" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
                <ListItemText primary="Banco De Dados" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button button onClick={handleClick6} className={classes.nested}>
                        <ListItemText primary="Sql Server" />
                        {open6 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open6} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText secondary="Versão 10" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={handleClick11} className={classes.nested}>
                        <ListItemText primary="Mysql" />
                        {open11 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open11} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText secondary="Versão 10" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
                <ListItemText primary="Rede" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={handleClick9} className={classes.nested}>
                        <ListItemText primary="Tipo" />
                        {open9 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open9} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={handleClick10} className={classes.nested}>
                                <ListItemText primary="LAN" />
                                {open10 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open10} timeout="auto" unmountOnExit>
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="INFORMAÇÃO CORRESPONDENTE"></ListItemText>
                                </ListItem>
                            </Collapse>
                        </List>
                    </Collapse>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
                <ListItemText primary="PeopleWare" />
                {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Aréa" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
                <ListItemText primary="Procidure" />
                {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}