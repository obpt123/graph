namespace graphs.samples {
    export class CanvasHost implements graphs.IGraphHost {
        //#region 构造函数
        constructor() {
            this._layers = [];
        }
        //#endregion

        //#region 属性
        private _width: number;
        public get width(): number {
            return this._width;
        }
        public set width(v: number) {
            this._width = v;
        }

        private _height: number;
        public get height(): number {
            return this._height;
        }
        public set height(v: number) {
            this._height = v;
        }

        private _layers: graphs.IGraphLayer[];
        public get layers(): graphs.IGraphLayer[] {
            return this._layers;
        }
        public set layers(v: graphs.IGraphLayer[]) {
            this._layers = v;
        }

        //#endregion

        layout(): void {
            let context: IGraphContext = this.buildContext();
            let layers: IGraphLayer[] = this._layers || [];
            layers.forEach((layer): void => {
                layer.render(context);
            });
        }

        private buildContext(): graphs.IGraphContext {
            return null;
        }
    }

}