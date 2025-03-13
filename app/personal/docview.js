import React from 'react';
import dynamic from 'next/dynamic';

const DocViewer = dynamic(() => import('react-doc-viewer'), { ssr: false });

const DOCXViewer = ({ fileUrl }) => {
    const docs = [{ uri: fileUrl }];

    return (
        <div style={{ height: '750px' }}>
            <DocViewer documents={docs} />
        </div>
    );
};

export default DOCXViewer;