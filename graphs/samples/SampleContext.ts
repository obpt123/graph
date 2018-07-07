namespace graphs.samples {
    export class SampleContext implements graphs.IGraphContext {
        /**
         *
         */
        constructor(host: any) {
            this.hostEle = host;
        }

        private _hostEle: any;
        public get hostEle(): any {
            return this._hostEle;
        }
        public set hostEle(v: any) {
            this._hostEle = v;
        }

        fillRect(rect: Rect, brush: IBrush, radius: number): void {
            throw new Error("Method not implemented.");
        }
        drawEllipse(bounds: Rect, pen: IPen): void {
            throw new Error("Method not implemented.");
        }
        fillEllipse(bounds: Rect, brush: IBrush): void {
            throw new Error("Method not implemented.");
        }
        drawLine(start: Point, end: Point, pen: IPen): void {
            throw new Error("Method not implemented.");
        }
        drawRect(rect: Rect): void {
            throw new Error("Method not implemented.");
        }



    }

}