#include "App.h"

App::App() {
    _vm = new VM();
    //AuthComponent::singleton().doTest();
}

App::~App() {
    delete _vm;
}

VM* App::vm() {
    return _vm;
}
