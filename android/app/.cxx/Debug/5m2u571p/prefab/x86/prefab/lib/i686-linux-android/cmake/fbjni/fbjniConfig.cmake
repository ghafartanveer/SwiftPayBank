if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/nextek/.gradle/caches/8.8/transforms/e0269596b4e8f4361c0cdd9a7ff12526/transformed/jetified-fbjni-0.6.0/prefab/modules/fbjni/libs/android.x86/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/nextek/.gradle/caches/8.8/transforms/e0269596b4e8f4361c0cdd9a7ff12526/transformed/jetified-fbjni-0.6.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

