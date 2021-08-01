
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import Button from 'components/Button/button';
import Icon from 'components/Icon/icon';

import Upload from './upload'

export default {
    title: 'Upload Component',
    component: Upload
} as Meta

const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50000) {
        alert('file too big')
        return false
    }
    return true
}

export const UploadFile = () => <Upload
    drag
    onChange={action('changed')}
    beforeUpload={checkFileSize}
    action='https://run.mocky.io/v3/8719be2a-32e3-45ba-a484-1d4442f7be68'>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <span>click Upload File or drag File Upload</span>
        <Icon theme='primary' icon='file-upload' size='5x'/>
    </div>
    </Upload>