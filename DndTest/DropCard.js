import React from 'react';
import 'antd/dist/antd.css';
import { Card, Icon} from 'antd';

const { Meta } = Card;


class DropCard extends React.Component {

    render() {
        return (
        <Card
            style={{ width: 275 }}
            cover={
            <img
                alt="dashboard"
                src="../images/dashboard.png"
                style={{ width: '273px', height: '70px'}}
            />
            }
            actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,            
            <Icon type="ellipsis" key="ellipsis" />,
            ]}
        >

            <Meta
                    
            description="Create a menu and a nav bar"
            />
        </Card>

        )
    }    
}

export default DropCard;