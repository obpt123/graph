
import IGraphContext = graphs.IGraphContext;
import IGraph = graphs.IGraph;
import IBrush = graphs.media.IBrush;
import IPen = graphs.media.IPen;
namespace graphs.shapes {
    export abstract class AreaShape implements IGraph {
        //#region 属性

        private _fill: IBrush;
        public get fill(): IBrush {
            return this._fill;
        }
        public set fill(v: IBrush) {
            this._fill = v;
        }


        private _border: IPen;
        public get border(): IPen {
            return this._border;
        }
        public set border(v: IPen) {
            this._border = v;
        }


        //#endregion
        abstract render(context: IGraphContext): void;


    }

}