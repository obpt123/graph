import RC=graphs.models.Rect
namespace graphs.shapes {
    export class Rect extends AreaShape {

        
        private _rect : RC;
        public get rect() : RC {
            return this._rect;
        }
        public set rect(v : RC) {
            this._rect = v;
        }
        
        private _radius : number;
        public get radius() : number {
            return this._radius;
        }
        public set radius(v : number) {
            this._radius = v;
        }
        

        render(context: IGraphContext): void {
            if (this.fill) {
                context.fillRect(this.rect,this.fill,this.radius);
            }
            if (this.border) {
                context.drawRect(this.rect,this.border,this.radius);
            }
        }

    }
}