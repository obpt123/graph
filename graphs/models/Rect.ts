
/// <refrences path="Point.ts" />
/// <refrences path="Size.ts" />
// import Point = graphs.models.Point
// import Size = graphs.models.Size

namespace graphs.models {
    export class Rect {
        private _location: Point;
        public get location(): Point {
            return this._location;
        }
        public set location(v: Point) {
            this._location = v;

        }

        private _size: Size;
        public get size(): Size {
            return this._size;
        }
        public set size(v: Size) {
            this._size = v;
        }
    }

}