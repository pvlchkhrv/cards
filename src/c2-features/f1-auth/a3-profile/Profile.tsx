import React from 'react';
import {Avatar, Button, List, ListItem, ListItemIcon, ListItemText, Paper} from '@material-ui/core';
import PagesIcon from '@material-ui/icons/Pages';
import LayersIcon from '@material-ui/icons/Layers';
import s from './Profile.module.css'
import {EditableSpan} from '../../../c1-main/m1-ui/common/editable-span/EditableSpan';

type ProfilePropsType = {
    nameValue: string
    avatarValue?: string
    onAvatarChange: (avatarLink: string) => void
    onNameChange: (newName: string) => void
    onLogoutClick: () => void
    email: string
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 onAvatarChange,
                                                 onNameChange,
                                                 onLogoutClick,
                                                 nameValue,
                                                 avatarValue,
                                                 email
                                             }) => {
    return (
        <div>
            <Paper elevation={3} className={s.paper}>
                <Avatar alt="avatar" src="https://images.aif.by/007/594/329095c44e514d3e3c8719ca8a623340.jpg"
                        className={s.avatar}/>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <PagesIcon/>
                        </ListItemIcon>
                        <ListItemText>Total Packs: <span>10</span></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon/>
                        </ListItemIcon>
                        <ListItemText>Total Cards: <span>20</span></ListItemText>
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
