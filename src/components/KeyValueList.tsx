import React from "react";

interface KeyValueProps {
    keyValues: {
        [key: string]: string;
    };
    ulClassName?: string;
    liClassName?: string;
    bClassName?: string;
    spanClassName?: string;
}

const KeyValueList: React.FC<KeyValueProps> = (props) => {
    return (
        <ul className={props.ulClassName}>
            {
                Object.entries(props.keyValues).map(([key, value]) => (
                    <li className={props.liClassName} key={key}>
                        <b className={props.bClassName}>
                            {key}
                        </b>
                        <span className={props.spanClassName}>
                            {value}
                        </span>
                    </li>
                ))
            }
        </ul>
    );
};

export default React.memo(KeyValueList);