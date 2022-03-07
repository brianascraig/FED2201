import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { SalesCategoriesDisplayComponent } from './sales-categories-display/sales-categories-display.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { ShopCategoriesGalleryComponent } from './shop-categories-gallery/shop-categories-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { AcceptedPayMethodsComponent } from './accepted-pay-methods/accepted-pay-methods.component';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarBrowseComponent } from './sidebar-browse/sidebar-browse.component';
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { ProductImageGalleryComponent } from './product-image-gallery/product-image-gallery.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductOptionsComponent } from './product-options/product-options.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartTotalsComponent } from './cart-totals/cart-totals.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { BilliComponent } from './billi/billi.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

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
    BilliComponent,
    BillingDetailsComponent,
    OrderDetailComponent,
    OrderCompleteComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
