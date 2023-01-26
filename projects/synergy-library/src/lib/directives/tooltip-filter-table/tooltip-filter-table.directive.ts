import { Directive, AfterViewInit, ElementRef, ApplicationRef, ComponentFactoryResolver, Injector, ComponentRef, Input, HostListener, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { PopupFiltersTableComponent } from '../../components/table/components/popup-filters-table/popup-filters-table.component';
import { DataType } from '../../enums/GlobalEnum';
import { ITableHeadersDTO } from '../../interfaces/ITableDTO';

@Directive({
  selector: '[legTooltipFilterTable]'
})
export class TooltipFilterTableDirective implements  OnDestroy {

  @Input() data: ITableHeadersDTO[] = [];
  private componentRef: ComponentRef<any> | undefined | null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {

  }

  ngOnDestroy(): void {
    this.destroy()
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef == null || this.componentRef == undefined) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          PopupFiltersTableComponent);
      this.componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem =
        (this.componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  // @HostListener('mouseleave')
  // onMouseLeave(): void {
  //   this.destroy();
  // }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null && this.componentRef !== undefined) {
      this.componentRef.instance.data = this.data.filter(x => x.dataType !== DataType.collapse);
      const { left, right, bottom } =
        this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + 12;
      this.componentRef.instance.top = bottom;
      this.componentRef.instance.destroyComponent = this.destroy.bind(this);
      console.log(this.componentRef.instance.left);
    }
  }

  destroy(): void {
    if (this.componentRef !== null && this.componentRef !== undefined) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
