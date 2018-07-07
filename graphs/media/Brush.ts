
namespace graphs.media {

    export class Brush implements IBrush {

        private _color: string;
        public get color(): string {
            return this._color;
        }
        public set color(v: string) {
            this._color = v;
        }




    }


}