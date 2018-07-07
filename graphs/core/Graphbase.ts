import Rect = graphs.models.Rect
import Size = graphs.models.Size
import Point = graphs.models.Point


namespace graphs.core {

    export interface IGraph {
        render(context: IGraphContext): void;

    }
    export interface IGraphContext {
        //drawLine():void;
        drawLine(start: Point, end: Point, pen: IPen);
        drawRect(rect: Rect,pen:IPen,radius:number);
        fillRect(rect:Rect,brush:IBrush,radius:number);
        drawEllipse(bounds:Rect,pen:IPen);
        fillEllipse(bounds:Rect,brush:IBrush);
    }

    export interface IGraphHost {
        layout(): void;
    }
    export interface IGraphLayer extends IGraph {

    }
}