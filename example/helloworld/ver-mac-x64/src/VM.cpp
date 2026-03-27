#include "VM.h"

VM::VM() {
    _mainGreetingText = "TODO-Text";
    _mainIsVisible = true;
}

QString VM::mainGreetingText() const {
    return _mainGreetingText;
}

bool VM::mainIsVisible() const {
    return _mainIsVisible;
}

void VM::setMainGreetingText(const QString &value) {
    _mainGreetingText = value;
    emit didChangeMainGreetingText(value);
}

void VM::setMainIsVisible(bool value) {
    _mainIsVisible = value;
    emit didChangeMainIsVisible(value);
}
