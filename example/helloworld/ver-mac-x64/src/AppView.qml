import QtQuick
import QtQuick.Controls

Window {
    height: 480
    title: qsTr("HW")
    visible: vm.mainIsVisible
    width: 640

    Rectangle {
        height: 480
        id: mainView
        width: 640

        Text {
            anchors.horizontalCenter: mainView.horizontalCenter
            font.bold: true
            font.pointSize: 24
            text: vm.mainGreetingText
            y: 30
        }
    }
}
