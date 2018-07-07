namespace graphs.media {
    export class Pen implements IBrush {

        private _width: string;
        public get width(): string {
            return this._width;
        }
        public set width(v: string) {
            this._width = v;
        }


        private _color: string;
        public get color(): string {
            return this._color;
        }
        public set color(v: string) {
            this._color = v;
        }

    }


}