package com.lemonsplat.push;

import android.content.Context;

import com.google.android.gcm.GCMBroadcastReceiver;
import static com.google.android.gcm.GCMConstants.DEFAULT_INTENT_SERVICE_CLASS_NAME;

/*
 * Implementation of GCMBroadcastReceiver that hard-wires the intent service to be 
 * com.lemonsplat.push.GCMIntentService, instead of your_package.GCMIntentService 
 */
public class CordovaGCMBroadcastReceiver extends GCMBroadcastReceiver {
	
	@Override
	protected String getGCMIntentServiceClassName(Context context) {
    	return "com.lemonsplat.push" + DEFAULT_INTENT_SERVICE_CLASS_NAME;
    }
	
}