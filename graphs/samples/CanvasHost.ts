namespace graphs.samples
{
    export class CanvasHost implements graphs.core.IGraphHost
    {
        //#region 构造函数
         constructor()
         {
             this._layers=[];
         }
        //#endregion

         //#region 属性
         private _width : number;
         public get width() : number {
             return this._width;
         }
         public set width(v : number) {
             this._width = v;
         }
         
         private _height : number;
         public get height() : number {
             return this._height;
         }
         public set height(v : number) {
             this._height = v;
         }
         
         private _layers : graphs.core.IGraphLayer[];
         public get layers() : graphs.core.IGraphLayer[] {
             return this._layers;
         }
         public set layers(v : graphs.core.IGraphLayer[]) {
             this._layers = v;
         }
         
         //#endregion

         
         layout()
         {
            let context=this.buildContext();
            let layers=this._layers||[];
            layers.forEach(function(v,i,arr){
                v.render(context);
            });
         }

         private buildContext():graphs.core.IGraphContext {
             return null;
         }
    }
    
}