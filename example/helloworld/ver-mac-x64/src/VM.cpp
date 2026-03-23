#include "VM.h"

VM::VM() {
    _inputMorningBalanceLabel = "TODO-Label";
}

QString VM::inputMorningBalanceLabel() const {
    return _inputMorningBalanceLabel;
}

void VM::setInputMorningBalanceLabel(const QString &value) {
    _inputMorningBalanceLabel = value;
    emit didChangeInputMorningBalanceLabel(value);
}
