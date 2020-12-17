import React from "react";
import css from './Message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div>
            <div className={css.container}>
                <img alt='avatar' src={props.avatar}/>
                <div className={css.content}>
                    <h3 className={css.name}>
                        {props.name}
                    </h3>
                    <div className={css.message}>
                        {props.message}
                    </div>
                    <span className={css.time}>
                        {props.time}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Message;
