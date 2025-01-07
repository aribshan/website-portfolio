import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css';

function AchievementCard({ id, title, details, date, field, image, link }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        achievementCard: {
            backgroundColor: theme.primary30,
            textDecoration: 'none', // Remove default link styles
            color: 'inherit', // Inherit text color
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: '170px',
            padding: '1.5rem',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            transition: 'background-color 200ms ease-in-out',
            width: '100%',
            position: 'relative',
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={classes.achievementCard}
            >
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{ color: theme.primary }}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>
                    </div>
                </div>
                <div className="achievecard-imgcontainer">
                    <img src={image} alt={title} />
                </div>
            </a>
        </Fade>
    );
}

export default AchievementCard;
