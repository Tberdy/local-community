class ProducteursPresController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {
        this.producteurs = {
            patrick: {
                name: 'Patrick',
                job: 'Producteur de tomates'
            }, 
            michel: {
                name: 'Michel',
                job: 'Producteur de lait'
            }, 
            manon: {
                name: 'Manon',
                job: 'Productrice de pomme'
            }
        };
    }
}

export const ProducteursPresComponent = {
    templateUrl: './views/app/components/producteurs-pres/producteurs-pres.component.html',
    controller: ProducteursPresController,
    controllerAs: 'vm',
    bindings: {}
}
