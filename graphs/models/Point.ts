namespace graphs.models
{
    export class Point
    {
        
        private _x : number;
        public get x() : number {
            return this._x;
        }
        public set x(v : number) {
            this._x = v;
        }
        
        private _value : number;
        public get value() : number {
            return this._value;
        }
        public set value(v : number) {
            this._value = v;
        }
        
    }

}