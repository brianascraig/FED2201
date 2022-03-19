import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SalesCategoriesDisplayComponent } from './product-gallery/sales-categories-display/sales-categories-display.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { ShopCategoriesGalleryComponent } from './product-gallery/shop-categories-gallery/shop-categories-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { AcceptedPayMethodsComponent } from './accepted-pay-methods/accepted-pay-methods.component';
import { ShopMainComponent } from './pages/shop-main/shop-main.component';
import { SidebarComponent } from './sidebars/sidebar/sidebar.component';
import { SidebarBrowseComponent } from './sidebars/sidebar-browse/sidebar-browse.component';
import { SidebarFilterComponent } from './sidebars/sidebar-filter/sidebar-filter.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { ProductImageGalleryComponent } from './product/product-image-gallery/product-image-gallery.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product/product-description/product-description.component';
import { ProductOptionsComponent } from './product/product-options/product-options.component';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';
import { CartProductsComponent } from './cart/cart-products/cart-products.component';
import { CartTotalsComponent } from './cart/cart-totals/cart-totals.component';
import { CheckoutDetailsComponent } from './cart/checkout-details/checkout-details.component';
import { BillingDetailsComponent } from './order/billing-details/billing-details.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderCompleteComponent } from './order/order-complete/order-complete.component';
import { OrderConfirmationComponent } from './order/order-confirmation/order-confirmation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HeaderComponent,
    MainMenuComponent,
    HomeComponent,
    SalesCategoriesDisplayComponent,
    FeaturedSectionComponent,
    ShopCategoriesGalleryComponent,
    FooterComponent,
    FooterMenuComponent,
    AcceptedPayMethodsComponent,
    ShopMainComponent,
    SidebarComponent,
    SidebarBrowseComponent,
    SidebarFilterComponent,
    SingleProductPageComponent,
    ProductImageGalleryComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    ProductOptionsComponent,
    ShoppingCartComponent,
    CartProductsComponent,
    CartTotalsComponent,
    CheckoutDetailsComponent,
    BillingDetailsComponent,
    OrderDetailComponent,
    OrderCompleteComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
