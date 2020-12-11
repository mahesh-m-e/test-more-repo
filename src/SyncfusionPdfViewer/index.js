import React, { Component } from "react";
import {
    PdfViewerComponent,
    Magnification,
    TextSelection,
    Annotation,
    TextSearch,
    Inject,
    Navigation
} from "@syncfusion/ej2-react-pdfviewer";

const tileSettings = { enableTileRendering: false, x: 0, y:0 };
const textSearchColorSettings={ currentOccurrence: "#20a1ff", otherOccurrence: "#e60033" };

export default class PdfDocumentEditorComponent extends Component {
    

    render(){
        const emptyFunc = () => {};
        console.log("Some Value")
        const {
            pdfId,
            accessRef,
            serviceUrl,
            ajaxRequestSettings,
            documentLoaded=emptyFunc,
            importAnnotationSuccess=emptyFunc,
            annotationAdded=emptyFunc,
            annotationSelect=emptyFunc,
            annotationResize=emptyFunc,
            annotationRemove=emptyFunc,
            pageChange=emptyFunc,
            annotationMouseover=emptyFunc,
            annotationMouseLeave=emptyFunc,
            hoverState
        } = this.props;

        return(
            <PdfViewerComponent
                documentLoad={documentLoaded}
                importSuccess={importAnnotationSuccess}
                annotationAdd={annotationAdded}
                annotationSelect={annotationSelect}
                enableTextMarkupResizer={true}
                annotationResize={annotationResize}
                annotationRemove={annotationRemove}
                pageChange={pageChange}
                annotationMouseover={annotationMouseover}
                annotationMouseLeave={annotationMouseLeave}
                restrictZoomRequest={true}
                enableAnnotation={true}
                enableTextSelection={true}
                enableNavigation={true}
                enableTextSearch={true}
                enableMultiPageAnnotation={true}
                enableAnnotationToolbar={false}
                enableBookmark={false}
                enableDownload={false}
                enableHyperlink={false}
                enableMagnification={true}
                enableNavigationToolbar={false}
                enablePersistence={false}
                enablePinchZoom={true}
                enablePrint={false}
                enableRtl={false}
                enableStampAnnotations={false}
                enableStickyNotesAnnotation={false}
                enableTextMarkupAnnotation={true}
                enableThumbnail={false}
                enableToolbar={false}
                textSearchColorSettings={textSearchColorSettings}
                tileRenderingSettings={tileSettings} 
                ref={accessRef}
                id={pdfId}
                ajaxRequestSettings={ajaxRequestSettings}
                serviceUrl={serviceUrl}
            >
                <Inject
                    services={[
                        Annotation,
                        Magnification,
                        TextSelection,
                        TextSearch,
                        Navigation
                    ]}
                />
                {
                    hoverState.showHover && <span className='hoverStyles' style={{...(hoverState.style || {})}}>{hoverState.content}</span>
                }
            </PdfViewerComponent>
        )
    }
}