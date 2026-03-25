#include "App.h"

App::App() {
    _vm = new VM();
    _main = new MainComponent();
    _main->launch();
}

App::~App() {
    delete _main;
    delete _vm;
}

MainComponent* App::main() {
    return _main;
}

VM* App::vm() {
    return _vm;
}
