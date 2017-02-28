angular.module('starter')

.controller('CompanyController', function($scope, companyService) {

    $scope.companies          = [];
    $scope.companiesFiltered  = [];
    $scope.departments        = [
        "Accounting",
        "Advertising",
        "Asset Management",
        "Customer Relations",
        "Customer Service",
        "Finances",
        "Human Resources",
        "Legal Department",
        "Media Relations",
        "Payroll",
        "Public Relations",
        "Quality Assurance",
        "Sales and Marketing",
        "Research and Development",
        "Tech Support"
    ];


    //using sintax .value for nested scopes in angularjs
    $scope.departmentSearch   = {
      value:                    ""
    };
    $scope.departmentSelected = {
      value:                    ""
    };
    $scope.loading = {
      value : false
    };

    //preload the info using a service
    companyService.GetAllCompany()
        .then(function(items) {
            $scope.companies = items;
        });


    /**
     * Event when the user enters a text, has a delay of 500ms
     * TODO: support autocomplete
     */
    $scope.onChangeSearchCompany = function() {
        //reset filter department
        $scope.departmentSelected.value = "";
        $scope.loading.value            = true;

        //look for by company name

        $scope.companiesFiltered = $scope.companies.filter(function(company) {
            //ignore mayus
            return company.comapnyName.toUpperCase().indexOf($scope.departmentSearch.value.toUpperCase()) > -1;
        });

        $scope.loading.value = false;

    };



    /**
     *Event when the user selects a value from the combobox
     *
     * @param {any} department Option Selected
     */
    $scope.onChangeFilterDepartment = function(department) {
        //disabled input search
        $scope.departmentSearch.value = "";

        $scope.companiesFiltered = $scope.companies.filter(function(company) {
            return company.companyDepartments.indexOf(department) > -1;
        });

    };


});
