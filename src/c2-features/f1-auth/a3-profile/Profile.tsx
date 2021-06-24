import React from 'react';
import {Avatar, Button, List, ListItem, ListItemIcon, ListItemText, Paper} from '@material-ui/core';
import PagesIcon from '@material-ui/icons/Pages';
import LayersIcon from '@material-ui/icons/Layers';
import s from './Profile.module.css'
import {EditableSpan} from '../../../c1-main/m1-ui/common/editable-span/EditableSpan';
import {PATH} from '../../../c1-main/m1-ui/Routes';
import {NavLink} from 'react-router-dom';

type ProfilePropsType = {
    nameValue: string
    avatarValue?: string
    onNameChange: (newName: string) => void
    onLogoutClick: () => void
    email: string
    packsCount: number
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 onNameChange,
                                                 onLogoutClick,
                                                 nameValue,
                                                 avatarValue,
                                                 email,
                                                 packsCount
                                             }) => {
    return (
        <div className={s.container}>
            <Paper elevation={3} className={s.paper}>
                <Avatar alt="avatar" src="https://images.aif.by/007/594/329095c44e514d3e3c8719ca8a623340.jpg"
                        className={s.avatar}/>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon/>
                        </ListItemIcon>
                        <NavLink to={PATH.CARD_PACKS} className={s.link}><ListItemText>Total
                            Packs: <span>{packsCount}</span></ListItemText></NavLink>
                    </ListItem>
                </List>
                <div>
                    <EditableSpan value={nameValue}
                                  onChange={onNameChange}
                        // onBlur={onNameChange}
                    />
                </div>
                <div>
                    <span>{email}</span>
                </div>
                <div className={s.buttonGroup}>
                    <Button variant={'outlined'} color={'primary'} className={s.button}
                            onClick={onLogoutClick}> Log Out </Button>
                    {/*<Button variant={'outlined'} color={'secondary'} className={s.button} onCLick={}>Cancel </Button>*/}
                </div>
            </Paper>
        </div>
    )
}

export default Profile;
