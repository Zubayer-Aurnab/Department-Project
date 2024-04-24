import { Alert } from 'antd';
import React from 'react';

const WarningAlert = () => {
    return (
        <div>
            <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
            />
        </div>
    );
};

export default WarningAlert;