
import Rect = graphs.models.Rect;
// import IBrush = graphs.media.IBrush;
// import IPen = graphs.media.IPen;
namespace graphs {

    export interface IGraphContext {
        drawLine(start: Point, end: Point, pen: IPen):void;
        drawRect(rect: Rect, pen: IPen, radius: number):void;
        fillRect(rect: Rect, brush: IBrush, radius: number):void;
        drawEllipse(bounds: Rect, pen: IPen):void;
        fillEllipse(bounds: Rect, brush: IBrush):void;
    }
}